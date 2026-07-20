#!/usr/bin/env bash
set -euo pipefail

: "${SSH_USER:?SSH_USER is required}"
: "${SSH_HOST:?SSH_HOST is required}"
: "${REMOTE_THEME_PATH:?REMOTE_THEME_PATH is required}"

SSH_USER="${SSH_USER//$'\r'/}"
SSH_USER="${SSH_USER#"${SSH_USER%%[![:space:]]*}"}"
SSH_USER="${SSH_USER%"${SSH_USER##*[![:space:]]}"}"
SSH_HOST="${SSH_HOST//$'\r'/}"
SSH_HOST="${SSH_HOST#"${SSH_HOST%%[![:space:]]*}"}"
SSH_HOST="${SSH_HOST%"${SSH_HOST##*[![:space:]]}"}"
REMOTE_THEME_PATH="${REMOTE_THEME_PATH//$'\r'/}"
REMOTE_THEME_PATH="${REMOTE_THEME_PATH#"${REMOTE_THEME_PATH%%[![:space:]]*}"}"
REMOTE_THEME_PATH="${REMOTE_THEME_PATH%"${REMOTE_THEME_PATH##*[![:space:]]}"}"
REMOTE_THEME_PATH="${REMOTE_THEME_PATH%/}"

THEME_DIR="$(cd "$(dirname "$0")/.." && pwd)"
SSH_CMD="${RSYNC_RSH:-ssh -o StrictHostKeyChecking=yes}"

echo "Deploying theme to ${SSH_USER}@${SSH_HOST}:${REMOTE_THEME_PATH}/"

rsync -avz --delete \
  --exclude node_modules \
  --exclude .git \
  --exclude dev/node_modules \
  -e "$SSH_CMD" \
  "${THEME_DIR}/" \
  "${SSH_USER}@${SSH_HOST}:${REMOTE_THEME_PATH}/"

echo "Fixing file ownership on remote server (best effort)..."
if ! ${SSH_CMD} "${SSH_USER}@${SSH_HOST}" \
  "find ${REMOTE_THEME_PATH} -path '*/node_modules' -prune -o -exec chown webmajstr:www-data {} + 2>/dev/null"; then
  echo "Warning: could not adjust remote ownership; deploy files were still synced."
fi

echo "Deploy complete."

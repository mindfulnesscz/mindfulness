#!/usr/bin/env bash
set -euo pipefail

: "${SSH_USER:?SSH_USER is required}"
: "${SSH_HOST:?SSH_HOST is required}"
: "${REMOTE_THEME_PATH:?REMOTE_THEME_PATH is required}"

THEME_DIR="$(cd "$(dirname "$0")/.." && pwd)"

echo "Deploying theme to ${SSH_USER}@${SSH_HOST}:${REMOTE_THEME_PATH}/"

rsync -avz --delete \
  --exclude node_modules \
  --exclude .git \
  --exclude dev/node_modules \
  "${THEME_DIR}/" \
  "${SSH_USER}@${SSH_HOST}:${REMOTE_THEME_PATH}/"

echo "Fixing file ownership on remote server..."
SSH_CMD="${RSYNC_RSH:-ssh}"
${SSH_CMD} "${SSH_USER}@${SSH_HOST}" \
  "find ${REMOTE_THEME_PATH} -path '*/node_modules' -prune -o -exec chown webmajstr:www-data {} +"

echo "Deploy complete."

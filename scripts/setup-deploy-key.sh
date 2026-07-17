#!/usr/bin/env bash
# One-time setup helper for GitHub Actions deploy to mind-server.cz
set -euo pipefail

KEY_PATH="${1:-./github_deploy_key}"
REPO="${GITHUB_REPO:-mindfulnesscz/mindfulness}"

if [[ -f "${KEY_PATH}" ]]; then
  echo "Key already exists at ${KEY_PATH} — delete it first to regenerate."
  exit 1
fi

ssh-keygen -t ed25519 -C "github-actions-mindfulness-deploy" -f "${KEY_PATH}" -N ""

echo ""
echo "=== Step 1: Add public key to mind-server.cz ==="
echo "Run on the server as webmajstr:"
echo ""
echo "  echo '$(cat "${KEY_PATH}.pub")' >> ~/.ssh/authorized_keys"
echo ""
echo "=== Step 2: Add GitHub Secrets ==="
echo "In https://github.com/${REPO}/settings/secrets/actions add:"
echo ""
echo "  SSH_PRIVATE_KEY  = contents of ${KEY_PATH}"
echo "  SSH_HOST         = mind-server.cz"
echo "  SSH_USER         = webmajstr"
echo "  REMOTE_THEME_PATH = /www/hosting/essteyr.com/www/wp-content/themes/mindfulness"
echo ""
echo "Or via gh CLI (requires repo admin):"
echo ""
echo "  gh secret set SSH_PRIVATE_KEY --repo ${REPO} < ${KEY_PATH}"
echo "  gh secret set SSH_HOST --repo ${REPO} --body 'mind-server.cz'"
echo "  gh secret set SSH_USER --repo ${REPO} --body 'webmajstr'"
echo "  gh secret set REMOTE_THEME_PATH --repo ${REPO} --body '/www/hosting/essteyr.com/www/wp-content/themes/mindfulness'"
echo ""
echo "=== Step 3: Enable branch protection on main ==="
echo "  gh api --method PUT repos/${REPO}/branches/main/protection \\"
echo "    --field required_status_checks=null \\"
echo "    --field enforce_admins=false \\"
echo "    --field required_pull_request_reviews='{\"required_approving_review_count\":1,\"dismiss_stale_reviews\":true}' \\"
echo "    --field restrictions=null"
echo ""
echo "Private key saved to: ${KEY_PATH}"
echo "Keep the private key secure. Do NOT commit it to git."

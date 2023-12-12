help:
	@echo "clean-modules       - Remove node_modules and package-lock.json"
	@echo "install-modules     - Install npm modules"
	@echo "reinstall-modules   - Reinstall npm modules"

clean-modules:
	rm -rf node_modules
	rm -f pnpm-lock.yaml

install-modules:
	pnpm install

reinstall-modules: clean-modules install-modules

package handler

import (
	"net/http"
	"path"

	"github.com/kleister/kleister-ui/pkg/assets"
	"github.com/kleister/kleister-ui/pkg/config"
)

// Static handles the delivery of all static assets.
func Static(cfg *config.Config) http.Handler {
	return http.StripPrefix(
		path.Join(
			cfg.Server.Root,
			"assets",
		),
		http.FileServer(
			assets.Load(cfg),
		),
	)
}

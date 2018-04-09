package handler

import (
	"fmt"
	"net/http"

	"github.com/kleister/kleister-ui/pkg/assets"
	"github.com/kleister/kleister-ui/pkg/config"
)

// Static handles the delivery of all static assets.
func Static(cfg *config.Config) http.Handler {
	return http.StripPrefix(
		fmt.Sprintf(
			"%sassets",
			cfg.Server.Root,
		),
		http.FileServer(
			assets.Load(cfg),
		),
	)
}

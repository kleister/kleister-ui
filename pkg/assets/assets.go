package assets

import (
	"fmt"
	"net/http"
	"os"
	"path"

	"github.com/kleister/kleister-ui/pkg/config"
	"github.com/rs/zerolog/log"
)

// Load initializes the static files.
func Load(cfg *config.Config) http.FileSystem {
	return ChainedFS{
		config: cfg,
	}
}

// ChainedFS is a simple HTTP filesystem including custom path.
type ChainedFS struct {
	config *config.Config
}

// Open just implements the HTTP filesystem interface.
func (c ChainedFS) Open(origPath string) (http.File, error) {
	if c.config.Server.Assets != "" {
		if stat, err := os.Stat(c.config.Server.Assets); err == nil && stat.IsDir() {
			customPath := path.Join(
				c.config.Server.Assets,
				"assets",
				origPath,
			)

			if _, err := os.Stat(customPath); !os.IsNotExist(err) {
				f, err := os.Open(customPath)

				if err != nil {
					return nil, err
				}

				return f, nil
			}
		} else {
			log.Warn().
				Msg("Custom assets directory doesn't exist")
		}
	}

	f, err := FS.OpenFile(
		CTX,
		origPath,
		os.O_RDONLY,
		0644,
	)

	if err != nil {
		return nil, err
	}

	return f, nil
}

// Templates provides a list of bundled templates.
func (c ChainedFS) Templates() ([]string, error) {

	return nil, fmt.Errorf("failed")
}

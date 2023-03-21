package command

import (
	"testing"

	"github.com/kleister/kleister-ui/pkg/config"
	"github.com/stretchr/testify/assert"
)

func TestSetupLogger(t *testing.T) {
	assert.NoError(t, setupLogger(config.Load()))
}

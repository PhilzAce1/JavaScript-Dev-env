// This file is not transpliled so it must be used with commonJs or Es5

// Register babel to transpile before our tests run.
require("babel-register")();

// Disable webpack features that Mocha doesn't understand.
require.extensions[".css"] = function () {};

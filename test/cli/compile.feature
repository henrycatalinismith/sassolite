Feature: CLI Compiler

  Scenario: Compiling from stdin to stdout
    When I pipe "h1 { color: red; }" into sassolite
    Then it should output
      """
      h1 {
        color: red; }

      """

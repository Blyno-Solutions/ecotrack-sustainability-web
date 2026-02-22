module.exports = function (plop) {
  // Feature Generator
  plop.setGenerator("feature", {
    description: "Create a new feature module",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Feature name (kebab-case):",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "features/{{name}}",
        base: "plop-templates/feature",
        templateFiles: "plop-templates/feature/**",
      },
    ],
  });

  // Component Generator
  plop.setGenerator("component", {
    description: "Create a reusable component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Component name (PascalCase):",
      },
    ],
    actions: [
      {
        type: "add",
        path: "components/{{name}}.tsx",
        templateFile: "plop-templates/component/component.hbs",
      },
    ],
  });
};

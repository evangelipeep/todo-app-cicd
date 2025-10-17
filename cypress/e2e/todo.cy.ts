describe("Todo App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("Добавление задачи", () => {
    cy.get(".todo-input").type("Первая задача");
    cy.contains("Добавить").click();
    cy.contains("Первая задача").should("exist");
  });

  it("Отметка задачи выполненной", () => {
    cy.get(".todo-input").type("Вторая задача");
    cy.contains("Добавить").click();
    cy.get("input[type='checkbox']").click();
    cy.contains("Вторая задача").should(
      "have.css",
      "text-decoration-line",
      "line-through"
    );
  });

  it("Удаление задачи", () => {
    cy.get(".todo-input").type("Третья задача");
    cy.contains("Добавить").click();
    cy.contains("Удалить").click();
    cy.contains("Третья задача").should("not.exist");
  });
});

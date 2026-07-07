# Engineering Principles

These principles define how Aerions should be built.

---

## 1. Single Responsibility

Every component should solve exactly one problem.

---

## 2. Replaceability

Every module should be replaceable without affecting the architecture.

Changing an AI provider should never require changing business logic.

---

## 3. AI is the Last Resort

Aerions should always determine whether deterministic software can complete a task before invoking intelligence.

Software first.

Intelligence second.

---

## 4. Context Before Execution

No execution should begin before sufficient context has been gathered.

Incomplete context leads to poor decisions.

---

## 5. Planning Before Action

Execution without planning creates unreliable systems.

Every objective should first become an execution plan.

---

## 6. Explicit Interfaces

Every component should expose well-defined inputs and outputs.

Hidden behavior should be avoided.

---

## 7. Testability

Every component must be testable in isolation.

---

## 8. Vendor Independence

Aerions must never become dependent on a single AI provider.

Providers are plugins.

The architecture is permanent.

---

## 9. Deterministic by Default

Whenever software can solve a problem deterministically, software should be preferred over AI.

---

## 10. Architecture Before Speed

Fast development should never compromise long-term architecture.

Build fast.

Design carefully.

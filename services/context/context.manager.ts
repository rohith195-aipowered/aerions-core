/**
 * Context Manager
 *
 * Every objective begins with understanding.
 */

export interface Context {
  score: number;
  sources: string[];
}

export class ContextManager {
  analyze(objective: string): Context {
    return {
      score: objective.length > 50 ? 90 : 20,
      sources: [],
    };
  }
}

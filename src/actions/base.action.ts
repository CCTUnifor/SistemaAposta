export abstract class Action<T> {
  protected abstract rep: string;

  public add = (state: any, entity: T) => {
    const newState = { ...state };
    newState[this.rep] = [...newState[this.rep], entity];

    return newState;
  };

  public update = (state: any, entity: T[]) => {
    const newState = { ...state };
    newState[this.rep] = entity;

    return newState;
  };
}

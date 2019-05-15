export abstract class Action<T> {
    public abstract rep: string;

    public  add = (state: any, entity: T) => {
        const newState = { ...state };
        newState[this.rep] = [...newState[this.rep], entity];
    
        return newState;
    }
}
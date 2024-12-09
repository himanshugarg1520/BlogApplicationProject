import { createAction, props } from "@ngrx/store";

export const increment = createAction("Increment");
export const decrement = createAction("Decrement");
export const reset = createAction("Reset");

export const customincrement = createAction("CustomIncrement", props<{value: number, action: string}>())
export const changechannelname = createAction("ChangeChannelname", props<{channel:string}>()) 

export const SHOW_ALERT = '[App Event] show alert';
export const EMPTY_ACTION = '[App Event] empty';
export const ShowAlert = createAction(SHOW_ALERT, props<{message: string, actionresult: string}>());
export const Empty_Action = createAction(EMPTY_ACTION)

export const Load_Spinner = '[blog page] load spinner'
export const loadspinner = createAction(Load_Spinner, props<{isloaded: boolean}>());

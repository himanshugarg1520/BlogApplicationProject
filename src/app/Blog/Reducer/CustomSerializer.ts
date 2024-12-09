import { Params, RouterStateSnapshot } from "@angular/router";
import { RouterStateSerializer } from "@ngrx/router-store";
import { RouterState } from "@angular/router";
import { Serializer } from "@angular/compiler";

export interface RouterstateModel{
    url: string,
    params: Params,
    queryparams: Params
}

export class CustomSerializer implements RouterStateSerializer<RouterstateModel>{
    serialize(routerState: RouterStateSnapshot): RouterstateModel {
        let route = routerState.root;

        while (route.firstChild) {
            route = route.firstChild;
        }

        const { url } = routerState;
        const params = route.params;
        const queryparams = routerState.root.queryParamMap;

        return { url, params, queryparams };

    }
}
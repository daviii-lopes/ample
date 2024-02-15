import { writable, derived } from "svelte/store";
import { v4 as uuidv4 } from "uuid";

export let Notifications = writable([]);
export let AlertsList = writable([]);
export let DispatchListerEvent = writable({});

export let ListerEvent = derived(
    DispatchListerEvent,
    ($DispatchListerEvent) => {
        if ($DispatchListerEvent === null) {
            return {};
        }

        if ($DispatchListerEvent.event) {
            $DispatchListerEvent._id = uuidv4();
        }

        return $DispatchListerEvent;
    },
);

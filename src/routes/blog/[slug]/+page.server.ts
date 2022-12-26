import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (({ params }) => {
    // todo: convert to db load
    if (params.slug === "hello") {
        return {
            title: "Hello World!",
            content: "Welcome to my writers blog! I'm happy to have you here!"
        };
    }

    if (params.slug === "publishing") {
        return {
            title: "The Predatory Publishing Market",
            content: "As Brandon Sanderson may have once said (potentially), 'Heck them publishers.'"
        };
    }

    throw error(404, "Not found");
}) satisfies PageServerLoad;

export const ssr = true;
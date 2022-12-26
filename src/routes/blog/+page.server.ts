import type { PageServerLoad } from "./$types";

export const load = (() => {
    // todo: load data from db
    const data = {
        posts: [
            {
                title: "Hello World!",
                slug: "hello",
            },
            {
                title: "The Predatory Publishing Market",
                slug: "publishing",
            },
        ]
    };

    return {
        posts: "<ul class='italic'>" + data.posts
        .map((e) => `<li class="p-3"><a href="/blog/${e.slug}" class="text-black p-4 text-m">${e.title}</a></li>`)
        .join("") + "</ul>"
    };

}) satisfies PageServerLoad;
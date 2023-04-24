/** @type {import('./$types').PageLoad} */

export async function load({ params }) {

    const temp = await import(`../../../lib/posts/${params.post}.md`)

    

    return {
        markdown: temp.default
    }

}
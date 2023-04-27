export const fetchMarkdownPosts = async () => {
    const allPostFiles = import.meta.glob("/src/lib/posts/*.md");
    const iterablePostFiles = Object.entries(allPostFiles);
  
    const allPosts = await Promise.all(
      iterablePostFiles.map(async ([path, resolver]) => {
        const { metadata } = (await resolver()) as any;
        /* remove the path part and the end part */
        const id = path.slice("/src/lib/posts/".length, ".md".length * -1);
        const postPath = `${id}`;
        return {
          meta: metadata,
          path: postPath,
        };
      })
    );

    console.log(allPosts)
  
    return allPosts;
  };
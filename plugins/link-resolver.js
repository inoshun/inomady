export default function(doc) {
  if (doc.isBroken) {
    return "/not-found";
  }

  if (doc.type === "blog_post") {
    return "/" + doc.uid;
  }

  if (doc.type === "category" || doc.type === "child_category") {
    return "/category/" + doc.uid;
  }

  return "/not-found";
}

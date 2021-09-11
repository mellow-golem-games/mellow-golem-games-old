import * as React from "react"



const PostCard = ({ post }) => {
  console.log(post)
  return (
    <div className="Post-Card transition-all duration-500 mb-12" style={{boxShadow: "0 0 19px 2px rgba(0,0,0,.11)"}}>
      <a href={post.fields.slug}>
        <div className="bg-cover bg-center" style={{height: "200px", backgroundImage: "url('/images/mountain.jpg')"}}>
        </div>
        <div className="p-4">
          <p className="text-sm text-primary">{ post.frontmatter.date }</p>
          <h2 className="text-2xl pt-2 pb-4">{ post.frontmatter.title} </h2>
          <p>{ post.frontmatter.description}</p>
        </div>
      </a>
    </div>
  )
}

export default PostCard

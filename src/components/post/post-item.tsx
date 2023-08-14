interface Props {
  title: string
  description: string
  date: string
}
const PostItem = ({ title, date, description }: Props) => {
  return (
    <>
      <h3 className="text-xl font-bold">title : {title}</h3>
      <span>description : {description}</span>
      <br />
      <span>date : {date}</span>
    </>
  )
}

export default PostItem

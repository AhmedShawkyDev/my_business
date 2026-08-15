interface PageTitleProps {
  title: string
  description: string
}

export default function PageTitle({ title, description }: PageTitleProps) {
  return (
    <div className="flex flex-col w-full gap-3.5 mt-10">
      <h1 className="flex gap-2 text-3xl text-foreground font-semibold">
        <span className="text-primary">/</span>
        {title}</h1>
      <p className="text-foreground text-lg font-medium">{description}</p></div>
  )
}
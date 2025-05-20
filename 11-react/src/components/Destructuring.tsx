import * as React from "react";

export interface Props {
  title: string;
  content: string;
  commentsQty: number;
  tags: string[];
}

export default function Destructuring({ title, content, commentsQty, tags }: Props) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Quantidade de comentários: {commentsQty}</p>
      <div>
        {tags.map((tag) => (
          <span>#{tag}</span>
        ))}
      </div>
    </div>
  );
}

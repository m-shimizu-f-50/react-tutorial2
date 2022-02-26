import { VFC } from "react";
import { TodoType } from "./types/todo";

// Pickはこのコンポーネントに必要な型指定を抜き取るイメージで使う
// props: Pick<TodoType, "userId" | "title" | "completed">

//　　OmitはPickとは逆で必要ではない型指定を抜き取る書き方もある(こちらの方がコンパクトにコードが書ける)
// props: Omit<TodoType, "id"

export const Todo: VFC<Omit<TodoType, "id">> = (props) => {
  const { title, userId, completed = false } = props;
  const completeMark = completed ? "[完]" : "[未]";

  return <p>{`${completeMark} ${title}(ユーザー)：${userId}`}</p>;
};

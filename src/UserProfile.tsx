import { VFC } from "react";
import { User } from "./types/user";

type Props = {
  user: User;
};

export const UserProfile: VFC<Props> = (props) => {
  const { user } = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      {/* オプショナルチェイニングでhobbiesがない場合に自動的にundefinedを返すようにしている */}
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  );
};

import styles from "../styles/CardList.module.css";
import Card from "./Card";
import { User } from "../pages/index";

type CardListProps = {
	users: User[];
};

export default function CardList({ users }: CardListProps) {
	return (
		<div className={styles.cardList}>
			{users.map((user) => {
				return <Card user={user} key={user.id} />;
			})}
		</div>
	);
}

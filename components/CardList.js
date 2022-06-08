import styles from "../styles/CardList.module.css";
import Card from "./Card.js";

export default function CardList({ users }) {
	return (
		<div className={styles.cardList}>
			{users.map((user) => {
				return <Card user={user} key={user.id} />;
			})}
		</div>
	);
}

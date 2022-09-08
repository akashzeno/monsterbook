import { ChangeEvent } from "react";
import styles from "../styles/SearchBox.module.css";

type SearchBoxProps = {
	placeholder?: string;
	filterUser: (event: ChangeEvent<HTMLInputElement>) => void;
};

export default function SearchBox({ placeholder, filterUser }: SearchBoxProps) {
	return (
		<input
			className={styles.searchBox}
			type="search"
			placeholder={placeholder}
			onChange={filterUser}
		/>
	);
}

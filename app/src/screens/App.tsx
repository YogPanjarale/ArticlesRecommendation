import { Button, Title, Paragraph } from "react-native-paper";
import {
	Tabs,
	TabScreen,
	useTabIndex,
	useTabNavigation,
} from "react-native-paper-tabs";
import {View} from 'react-native'
import Recommended from "./Recommended";
import Popular  from "./Popular"
import Feed     from "./Feed"
export default function TabsScreen() {
	return (
		<Tabs
		>
			<TabScreen label="Explore" icon="popular">
				<Popular/>
			</TabScreen>
			<TabScreen label="Recommmended" icon="home">
				<Recommended/>
			</TabScreen>
			<TabScreen label="Article" icon="book">
				<Feed/>
			</TabScreen>
		</Tabs>
	);
}

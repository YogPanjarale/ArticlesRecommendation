import React, { Component } from "react";
import { Text, View, FlatList, ListRenderItem } from "react-native";
import { List } from "react-native-paper";
import { getRecommendedArticles } from "../utils/getRecommendedArticles";
import { IArticle } from "../utils/types";
type State = {
	data: IArticle[];
};

const ListItem = (item: IArticle) => (
	<List.Item title={item.title} description={item.text} />
);
export default class Recommended extends Component<{}, State> {
	constructor(props: {} | Readonly<{}>) {
		super(props);
		this.state = {
			data: [],
		};
	}
	componentDidMount = () => {
		getRecommendedArticles().then((data) => {
			this.setState({ data });
		});
	};

	render() {
		return (
			<View>
				<FlatList
					data={this.state.data}
					renderItem={ListItem as any as ListRenderItem<IArticle>}
					keyExtractor={(item: IArticle, index: number) =>
						index + " this will work"
					}
				></FlatList>
			</View>
		);
	}
}

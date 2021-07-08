import React, { Component } from "react";
import { Text, View, FlatList, ListRenderItem } from "react-native";
import { List } from "react-native-paper";
import getPopularArticles from "../utils/getPopularArticles";
import { IArticle } from "../utils/types";
type State = {
	data: IArticle[];
};

const ListItem = (item: IArticle) => (
	<List.Item title={item.title} description={item.text.substr(0,100)+"..."} />
);
export default class Popular extends Component<{}, State> {
	constructor(props: {} | Readonly<{}>) {
		super(props);
		this.state = {
			data: [],
		};
	}
	componentDidMount = () => {
		getPopularArticles().then((data) => {
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

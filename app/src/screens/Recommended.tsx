import React, { Component } from "react";
import { Text, View, FlatList, ListRenderItem } from "react-native";
import { List } from "react-native-paper";
import { IArticle } from "../utils/types";
type Props = IArticle[];

const ListItem = (item: IArticle) => (
	<List.Item title={item.title} description={item.text} />
);
export default class Recommended extends Component<Props> {
	render() {
		return (
			<View>
				<FlatList
					data={this.props}
					renderItem={ListItem as any as ListRenderItem<IArticle>}
                    keyExtractor={(item: IArticle, index: number) => index+" this will work"}
				></FlatList>
			</View>
		);
	}
}

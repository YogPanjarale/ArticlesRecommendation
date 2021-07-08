import React, { Component } from "react";
import { Text, View } from "react-native";
import { Button, Card, Paragraph, Title } from "react-native-paper";
import { getArticles } from "../utils/getArticles";
import { likeArticle } from "../utils/likeArticle";
import { IArticle } from "../utils/types";
import { unlikeArticle } from "../utils/unlikeArticle";

type State = {
	data: IArticle;
};

export default class Feed extends Component<{}, State> {
	componentDidMount = () => {
		getArticles().then((articles) => {
			this.setState({ data: articles });
		});
	};
    getArticle = () => {
        getArticles().then((articles) => {
			this.setState({ data: articles });
		});
    }
	like = () => {
		likeArticle().then(() => {
            getArticles()
        });
	};
	dislike = () => {
		unlikeArticle().then(() => {
            getArticles()
        });
	};
	render() {
		const { title, text, total_events } = this.state.data;
		return (
			<View>
				<Card>
					<Card.Title
						title={title}
						subtitle={"Total Events: " + total_events}
					/>
					<Card.Content>
						<Title>{title}</Title>
						<Paragraph>{text}</Paragraph>
					</Card.Content>
					<Card.Actions>
						<Button
							onPress={() => {
								this.like();
							}}
						>
							Like
						</Button>
						<Button
							onPress={() => {
								this.like();
							}}
						>
							Dislike
						</Button>
					</Card.Actions>
				</Card>
			</View>
		);
	}
}

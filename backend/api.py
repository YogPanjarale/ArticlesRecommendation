print("Starting up...")
from flask import Flask, jsonify, request
print("Storage setup ...")
from storage import all_articles, liked_articles, not_liked_articles
print("Demographic Filtering setup...")
from demographic_filtering import demographic_filtered
print("Content based Filtering")
from content_filtering import get_recommendations
app = Flask(__name__)

@app.route("/get-article")
def get_article():
    # print(type(all_articles),"*"*10)
    if len(all_articles)>0:
        movie_data = {
            "url": all_articles[0][10],
            "title": all_articles[0][11],
            "text": all_articles[0][12],
            "lang": all_articles[0][13],
            "total_events": all_articles[0][14]
        }
        return jsonify({
            "data": movie_data,
            "status": "success"
        })
    return jsonify({
        "status": "fail"
    })
    

@app.route("/liked-article", methods=["POST"])
def liked_article():
    article = all_articles[0]
    liked_articles.append(article)
    all_articles.pop(0)
    return jsonify({
        "status": "success"
    }), 201
@app.route("/liked-article", methods=["GET"])
def get_liked_article():
    article_data = []
    for article in liked_articles:
        _d = {
            "url": article[0],
            "title": article[1],
            "text": article[2],
            "lang": article[3],
            "total_events": article[4],
            "all_thing":article
        }
        article_data.append(_d)
    return jsonify({
        "data": article_data,
        "status": "success"
    }), 200

@app.route("/unliked-article", methods=["POST"])
def unliked_article():
    article = all_articles[0]
    not_liked_articles.append(article)
    all_articles.pop(0)
    return jsonify({
        "status": "success"
    }), 201

@app.route("/unliked-article", methods=["GET"])
def get_not_liked_article():
    article_data = []
    for article in not_liked_articles:
        _d = {
            "url": article[10],
            "title": article[11],
            "text": article[12],
            "lang": article[13],
            "total_events": article[14]
        }
        article_data.append(_d)
    return jsonify({
        "data": article_data,
        "status": "success"
    }), 200

@app.route("/popular-articles")
def popular_articles():
    article_data = []
    for article in demographic_filtered:
        _d = {
            "url": article[0],
            "title": article[1],
            "text": article[2],
            "lang": article[3],
            "total_events": article[4]
        }
        article_data.append(_d)
    return jsonify({
        "data": article_data,
        "status": "success"
    }), 200

@app.route("/recommended-articles")
def recommended_articles():
    all_recommended = []
    for liked_article in liked_articles:
        output = get_recommendations(liked_article[3])
        for data in output:
            all_recommended.append(data)
    import itertools
    all_recommended.sort()
    all_recommended = list(all_recommended for all_recommended,_ in itertools.groupby(all_recommended))
    article_data = []
    for recommended in all_recommended:
        _d = {
            "url": recommended[0],
            "title": recommended[1],
            "text": recommended[2],
            "lang": recommended[3],
            "total_events": recommended[4]
        }
        article_data.append(_d)
    return jsonify({
        "data": article_data,
        "status": "success"
    }), 200

if __name__ == "__main__":
    app.run(debug=True)
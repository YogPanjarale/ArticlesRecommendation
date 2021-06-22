from flask import Flask,jsonify
import pandas as pd
app =  Flask(__name__)
df = pd.read_csv("articles.csv")
liked_articles =[]
not_liked_articles=[]

@app.route("/")
def base():
    return'Hello'
@app.route("/demographic")
def demographic():
    return jsonify( df[['title','timestamp','url','text']].head(10).to_dict(orient='records'))

if __name__=='__main__':
    app.run("0.0.0.0",3000,debug=True)
App.jsの中にこのようなコードが存在しています。
```javascript
 Axios
     .get(yourURL)
     .then((response) => {   // GETされたものをresponseにいれる。
     	return response.data //response['data']と同じ意味
     });
```

第3行からの

```javascript
(response) => {
	return response
}
```

を注目して欲しい。

これが Javascripの関数の書き方の一種です。（Arrow functionsと呼ぶ）

従来の書き方（下記）と同じ意味。

```javascript
function(response){
    return response.data
}
```

Python で例えするなら

```python
def hoge(response): 
    return response["data"]
```



続き、

先ほどのaxiosでGETされたものの話

```javascript
{		// {} だから、オブジェクト（辞書型）
    "data": [			// [] だから、Array(リストまたは配列)
        {				// {} だから、オブジェクト（辞書型）
            "time": "2020-02",	// ここはstring型（文字列）
            "speed": 2,			// 数字だから、int型
            "height": 3
        },
        {				// {} だから、オブジェクト（辞書型）
            "time": "2020-02",
            "speed": 4,
            "height": 6
        }
    ],
    "status": 200,		// 数字だから、int型
    "headers": {		// また {} のため、オブジェクト（辞書型）
        "content-length": "115",	// ここはstring型（文字列）
        "content-type": "application/json"
    }
}
```

馴染み深いのPythonの書き方ほぼ同じ。

試しにデータの中身を取ると

JavaScript:

```javascript
>> response.data // または response['data']
[{"time": "2020-02","speed": 2,"height": 3},{"time": "2020-02","speed": 4,"height": 6}]

>> response.data[0] // または response['data'][0]
{"time": "2020-02","speed": 2,"height": 3}

>> response.data[0].speed // または response['data'][0]['speed']
2
```

Python:

```python
>> response['data']
[{"time": "2020-02","speed": 2,"height": 3},{"time": "2020-02","speed": 4,"height": 6}]

>> response['data'][0]
{"time": "2020-02","speed": 2,"height": 3}

>> response['data'][0]['speed']
2
```

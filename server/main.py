import json

from bottle import route, run, template

@route('/api/vehicles/<idval>')
def index(idval):
    stub = {
        'name': 'Cavalier',
        'manufacturer': 'Chevy',
        'year': '1998'
    }
    return json.dumps(stub)
    #return template('<b>Hello {{name}}</b>!', name=idval)

run(host='localhost', port=8080)
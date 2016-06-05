export const enumTests = [
  {
    'description': 'simple enum validation',
    'schema': { 'enum': [1, 2, 3] },
    'tests': [
      {
        'description': 'one of the enum is valid',
        'data': 1,
        'valid': true
      },
      {
        'description': 'something else is invalid',
        'data': 4,
        'valid': false
      }
    ]
  },
  {
    'description': 'heterogeneous enum validation',
    'schema': { 'enum': [6, 'foo', [], true, { 'foo': 12 }] },
    'tests': [
      {
        'description': 'one of the enum is valid',
        'data': [],
        'valid': true
      },
      {
        'description': 'something else is invalid',
        'data': null,
        'valid': false
      },
      {
        'description': 'objects are deep compared',
        'data': { 'foo': false },
        'valid': false
      }
    ]
  },
  {
    'description': 'enums in properties',
    'schema': {
      'type': 'object',
      'properties': {
        'foo': { 'enum': ['foo'] },
        'bar': { 'enum': ['bar'] }
      },
      'required': ['bar']
    },
    'tests': [
      {
        'description': 'both properties are valid',
        'data': { 'foo': 'foo', 'bar': 'bar' },
        'valid': true
      },
      {
        'description': 'missing optional property is valid',
        'data': { 'bar': 'bar' },
        'valid': true
      },
      {
        'description': 'missing required property is invalid',
        'data': { 'foo': 'foo' },
        'valid': false
      },
      {
        'description': 'missing all properties is invalid',
        'data': {},
        'valid': false
      }
    ]
  }
]

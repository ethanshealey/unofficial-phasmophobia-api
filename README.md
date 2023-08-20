# Unofficial Phasmophobia Api

Welcome to my unofficial Phasmophobia API!

### Routes

```
GET /api/v1/ghosts
```
Returns a list of all the ghost types in the game

Response:
```yaml
[
  {
    name: string,
    evidence: Evidence[],
    abilities: string[],
    strength: string,
    weakness: string,
    strategies?: string[]
    identification?: string[]
  }
]
```
---
```
GET /api/v1/ghosts/:name
```
Returns details on the specified ghost type

Response:
```yaml
{
  name: string,
  evidence: Evidence[],
  abilities: string[],
  strength: string,
  weakness: string,
  strategies?: string[]
  identification?: string[]
}
```
---
```
GET /api/v1/cursed-possessions
```
Returns a list of all cursed possessions in the game

Response:
```yaml
[
  {
    name: string,
    description: string,
    interactions?: CursedPossessionInteractions[],
    tips?: string[]
  }
]
```
---
```
GET /api/v1/cursed-possessions/:name
```
Returns details on the specified cursed possession

Response:
```yaml
{
  name: string,
  description: string,
  interactions?: CursedPossessionInteractions[],
  tips?: string[]
}
```

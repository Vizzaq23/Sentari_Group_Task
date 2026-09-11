# Sentari Group Exercise

A TypeScript exercise workspace based on the included interview template. The implementation and tooling live under [template/](template/).

## Current implementation

`template/src/lib/sampleFunction.ts` currently returns a fixed example response and logs a hardcoded transcript. This repository is a scaffold/prototype snapshot, not the production Sentari application or evidence of a completed AI pipeline.

## Explore

| Path | Purpose |
| --- | --- |
| `template/src/lib/sampleFunction.ts` | Current exercise implementation |
| `template/src/lib/types.ts` | Result and input types |
| `template/src/lib/mockData.ts` | Fixture support |
| `template/tests/` | Provided tests |
| `template/README.md` | Original assignment instructions |

## Local workflow

Install Node.js and pnpm, then:

```sh
git clone https://github.com/Vizzaq23/Sentari_Group_Task.git
cd Sentari_Group_Task/template
pnpm install
pnpm test
pnpm lint
```

These are the scripts declared by the template. No passing-test or coverage claim is made here. The fixed response does not require an API key; the template includes a separate optional provider helper.

## Next steps

Replace the hardcoded input with the typed function argument, implement the requested transformation, and add assertions for the intended behavior. Preserve the original assignment documentation when reviewing the exercise.

[Quintin Vizza — engineering portfolio](https://www.quintinvizza.dev/)

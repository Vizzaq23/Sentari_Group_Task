<!-- README presentation: Vizzaq23 portfolio palette -->
<p align="center">
  <a href="https://github.com/Vizzaq23"><img src="https://img.shields.io/badge/Vizzaq23%20%C2%B7%20EXERCISE%20SCAFFOLD-101722?style=flat-square&amp;labelColor=101722&amp;color=D7B877" alt="Vizzaq23 · EXERCISE SCAFFOLD" /></a>
</p>

<h1 align="center">Sentari Group Exercise</h1>

<p align="center"><strong>A TypeScript workspace for exploring transcript-processing ideas.</strong></p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-101722?style=flat-square&amp;labelColor=101722&amp;color=85CFE8" alt="TypeScript" />
  <img src="https://img.shields.io/badge/pnpm-101722?style=flat-square&amp;labelColor=101722&amp;color=D7B877" alt="pnpm" />
</p>

<p align="center">
  <a href="https://quintinvizza.dev">Portfolio</a> · <a href="https://github.com/Vizzaq23">GitHub profile</a>
</p>

<p align="center">
  <a href="#overview">Overview</a> · <a href="#current-implementation">Implementation</a> · <a href="#explore">Code map</a> · <a href="#local-workflow">Local workflow</a>
</p>

<img src="https://raw.githubusercontent.com/Vizzaq23/Vizzaq23/main/assets/divider.svg" width="100%" alt="" />

## Overview

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

<img src="https://raw.githubusercontent.com/Vizzaq23/Vizzaq23/main/assets/divider.svg" width="100%" alt="" />

<p align="center"><sub>Built by <a href="https://github.com/Vizzaq23">Quintin Vizza</a> · <a href="https://quintinvizza.dev">Explore my work</a></sub></p>

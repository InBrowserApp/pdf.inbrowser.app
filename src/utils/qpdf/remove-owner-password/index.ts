// @ts-ignore
import Module from "@jspawn/qpdf-wasm/qpdf.js";
import WASM_URL from "@jspawn/qpdf-wasm/qpdf.wasm?url";

export async function removeOwnerPassword(blob: Blob): Promise<Blob> {
  const mod = await Module({
    locateFile: () => WASM_URL,
  });
  const working = "/working";
  mod.FS.mkdir(working);

  const input = `${working}/input.pdf`;

  await mod.FS.writeFile(input, new Uint8Array(await blob.arrayBuffer()), {
    encoding: "binary",
  });

  const output = `${working}/output.pdf`;

  const args = ["--decrypt", input, output];

  const result = await mod.callMain(args);

  if (result !== 0) {
    throw new Error("Failed to remove owner password");
  }

  const outputBlob = await mod.FS.readFile(output, { encoding: "binary" });

  return new Blob([outputBlob], { type: "application/pdf" });
}

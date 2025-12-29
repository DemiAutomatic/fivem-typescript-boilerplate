import { ResourceName } from "./resource";

export function LoadFile(path: string) {
  return LoadResourceFile(ResourceName, path);
}

export function LoadJsonFile<T = unknown>(path: string): T {
  return JSON.parse(LoadFile(path)) as T;
}

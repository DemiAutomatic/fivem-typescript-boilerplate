declare const window: {
  GetParentResourceName: () => string;
};

export const ResourceContext = IsDuplicityVersion() ? "server" : "client";
export const ResourceName = GetCurrentResourceName();

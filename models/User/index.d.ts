declare class User {
  document: {
    pageListHeight: string;
  };

  constructor(args?: any, json?: any);

  addPage(pageID: string, opts: { scrollOrigin: string, zoomValue: number }): User;

}

export = User;

type SpaceSchema = {
  GET: {
    request: { id: string | number };
    response: {
      id: string;
      name: string;
      defaultThread: string;
      isPrivate: boolean;
      creator: {
        code: string;
        name: string;
      };
      modifier: {
        code: string;
        name: string;
      };
      memberCount: string;
      coverType: "BLOB" | "PRESET";
      coverKey: string;
      coverUrl: string;
      body: string;
      useMultiThread: boolean;
      isGuest: boolean;
      attachedApps: Array<{
        threadId: string;
        appId: string;
        code: string;
        name: string;
        description: string;
        createdAt: string;
        creator: {
          code: string;
          name: string;
        };
        modifiedAt: string;
        modifier: {
          code: string;
          name: string;
        };
      }>;
      fixedMember: boolean;
      showAnnouncement: boolean | null;
      showThreadList: boolean | null;
      showAppList: boolean | null;
      showMemberList: boolean | null;
      showRelatedLinkList: boolean | null;
    };
  };
  DELETE: { request: { id: string }; response: Record<string, never> };
};
type SpaceBodySchema = {
  PUT: {
    request: {
      id: string | number;
      body: string;
    };
    response: Record<string, never>;
  };
};
type SpaceMembersSchema = {
  GET: {
    request: {
      id: string | number;
    };
    response: {
      members: Array<
        | {
            entity: {
              type: "USER";
              code: string;
            };
            isAdmin: boolean;
            isImplicit: boolean;
          }
        | {
            entity: {
              type: "USER" | "GROUP";
              code: string;
            };
            isAdmin: boolean;
          }
        | {
            entity: {
              type: "ORGANIZATION";
              code: string;
            };
            isAdmin: boolean;
            includeSubs: boolean;
          }
      >;
    };
  };
  PUT: {
    request: {
      id: string | number;
      members: Array<
        | {
            entity: {
              type: "USER" | "GROUP";
              code: string;
            };
            isAdmin?: boolean;
          }
        | {
            entity: {
              type: "ORGANIZATION";
              code: string;
            };
            isAdmin?: boolean;
            includeSubs?: boolean;
          }
      >;
    };
    response: Record<string, never>;
  };
};
type SpaceThreadSchema = {
  PUT: {
    request: { id: string | number; name?: string; body?: string };
    response: Record<string, never>;
  };
};
type SpaceThreadCommentSchema = {
  POST: {
    request: {
      space: string | number;
      thread: string | number;
      comment: {
        text?: string;
        mentions?: Array<{
          code: string;
          type: "USER" | "GROUP" | "ORGANIZATION";
        }>;
        files?: Array<{
          fileKey: string;
          width: string | number;
        }>;
      };
    };
    response: { id: string };
  };
};
type TemplateSpaceSchema = {
  POST: {
    request: {
      id: string | number;
      name: string;
      members: Array<
        | {
            entity: {
              type: "USER" | "GROUP";
              code: string;
            };
            isAdmin?: boolean;
          }
        | {
            entity: {
              type: "ORGANIZATION";
              code: string;
            };
            isAdmin?: boolean;
            includeSubs?: boolean;
          }
      >;
      isPrivate?: boolean;
      isGuest?: boolean;
      fixedMember?: boolean;
    };
    response: { id: string };
  };
};
type GuestsSchema = {
  POST: {
    request: {
      guests: Array<{
        code: string;
        password: string;
        timezone: string;
        locale?: "auto" | "ja" | "en" | "zh";
        image?: string;
        name: string;
        surNameReading?: string;
        givenNameReading?: string;
        company?: string;
        division?: string;
        phone?: string;
        callto?: string;
      }>;
    };
    response: Record<string, never>;
  };
  DELETE: {
    request: {
      guests: string[];
    };
    response: Record<string, never>;
  };
};
type SpaceGuestsSchema = {
  PUT: {
    request: { id: string | number; guests: string[] };
    response: Record<string, never>;
  };
};

type Schema = {
  space: SpaceSchema;
  "space/body": SpaceBodySchema;
  "space/members": SpaceMembersSchema;
  "space/thread": SpaceThreadSchema;
  "space/thread/comment": SpaceThreadCommentSchema;
  "template/space": TemplateSpaceSchema;
  guests: GuestsSchema;
  "space/guests": SpaceGuestsSchema;
};

export type { Schema };

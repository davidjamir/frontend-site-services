"use client";

import Logo from "@/components/layout/Logo";
import SearchForm from "@/components/layout/SearchForm";
import PrimaryMenu from "@/components/layout/PrimaryMenu";

import { Site } from "@/core/domain/site";

type Props = {
  site: Site;
};

export default function NewsHeader({ site }: Props) {
  return (
    <div className="w-full max-w-370 mx-auto flex items-center justify-between">
      {/* LEFT */}
      <div className="flex-1 flex justify-start">
        <Logo logo={site.logo} size="medium" />
      </div>

      {/* CENTER */}
      <div
        className="
      hidden md:flex
      flex-2
      justify-center
      min-w-0
    "
      >
        <PrimaryMenu items={site.pages || []} />
      </div>

      {/* RIGHT */}
      <div
        className="
      hidden lg:flex
      flex-1
      justify-end
      min-w-0
    "
      >
        <div className="w-full max-w-xs">
          <SearchForm />
        </div>
      </div>
    </div>
  );
}

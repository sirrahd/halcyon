<form class="toot-form js-toot-form" name="toot-form">

    {{-- Avatar area --}}
    <div class="toot-form__avatar">
        <img class="js-user-avatar" src="/images/omae-mona.png"/>
    </div>

    {{-- ↓Content of status↓ --}}
    <div class="toot-form__container">

        <div class="toot-form__replying-to">
            <span>
                @lang('toot-form-replying-to')
            </span>
            <a class="js-toot-form__replying-to-link">
                {{-- @someone --}}
            </a>
        </div>

        <input class="toot-form__spoiler-text js-toot-form-spoiler-text reset-input invisible"
            name="spoiler_text"
            placeholder="@lang('toot-form-spoiler-text')"
            type="text"
        />

        <div class="toot-form__status-wrap">
            <textarea class="toot-form__status js-toot-form-status reset-input"
                name="status"
                placeholder="@lang('toot-form-status')"
                required
            ></textarea>
            <ul class="toot-form__media-preview js-toot-form-media-preview">
            </ul>
        </div>

        <div class="toot-form__toolbox-wrap">

            <div class="toot-form__toolbox toot-form__toolbox--left">
                <label class="toot-form__toolbox toot-form__toolbox--files reset-input cursor-pointer">
                    <i class="hlicon-photo"></i>
                    <input name="files" type="file" multiple class="invisible"/>
                </label>

                <label class="toot-form__toolbox toot-form__toolbox--spoiler-text reset-input cursor-pointer">
                    <i class="hlicon-cw"></i>
                </label>

                <label class="toot-form__toolbox toot-form__toolbox--sensitive reset-input cursor-pointer">
                    <i class="hlicon-nsfw"></i>
                    <input type="checkbox" name="sensitive" class="invisible">
                </label>

                <label class="dropdown-menu toot-form__toolbox toot-form__toolbox--visibility reset-input cursor-pointer">
                    <i class="hlicon-social"></i>
                    <div class="dropdown-menu-child invisible">
                        <input type="radio" name="visibility" value="public" class="invisible">
                        <input type="radio" name="visibility" value="unlisted" class="invisible">
                        <input type="radio" name="visibility" value="private" class="invisible">
                        <input type="radio" name="visibility" value="direct" class="invisible">
                    </div>
                </label>
            </div>

            <div class="toot-form__toolbox toot-form__toolbox--right">
                <input class="toot-form__submit reset-input cursor-pointer"
                    name="submit"
                    type="submit"
                    value="@lang('toot-form-submit')"
                />
            </div>

        </div>
    </div>

</form>

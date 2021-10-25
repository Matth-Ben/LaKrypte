<div class="wp-playlist-caption">
    <# if ( data.meta.album ) { #><h2 class="wp-playlist-item-meta wp-playlist-item-album">{{ data.meta.album }}</h2><# } #>
    <# if ( data.meta.artist ) { #><span class="wp-playlist-item-meta wp-playlist-item-artist">{{ data.meta.artist }}</span><# } #>
</div>

<# if ( data.thumb && data.thumb.src ) { #>
{{ console.log(data.thumb) }}
    <img src="{{ data.thumb.src }}" alt="{{ data.thumb.alt }}" width="600" />
    <# } #>